package com.project.AI.Resume.Maker.controller;

import com.project.AI.Resume.Maker.model.ResumeFields;
import com.project.AI.Resume.Maker.repository.ResumeRepo;
import com.project.AI.Resume.Maker.utils.LatexCompiler;
import com.project.AI.Resume.Maker.utils.TemplateFiller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.*;
import java.util.UUID;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    @Autowired
    private ResumeRepo resumeRepo;

    @PostMapping("/generate")
    public ResponseEntity<byte[]> generateResume(@RequestBody ResumeFields fields) throws IOException, URISyntaxException {

        // Step 1: Save user data to MongoDB
        resumeRepo.save(fields);

        // Step 2: Load LaTeX template from resources
        var resource = getClass().getClassLoader().getResource("templates/akshat_template.tex");
        if (resource == null) {
            throw new IOException("LaTeX template not found in resources/templates/");
        }
        Path templatePath = Paths.get(resource.toURI());

        // Step 3: Fill the template
        String filled = TemplateFiller.fillTemplate(templatePath, fields);

        // Step 4: Create unique filenames
        String uniqueName = "resume_" + UUID.randomUUID();
        Path texPath = Paths.get(uniqueName + ".tex");
        Path pdfPath = Paths.get(uniqueName + ".pdf");

        // Step 5: Write LaTeX to file
        Files.writeString(texPath, filled);

        // Step 6: Compile to PDF
        byte[] pdfBytes = LatexCompiler.compiletopdf(texPath.toString(), pdfPath.toString());

        // Step 7: Clean up .tex and .pdf files
        Files.deleteIfExists(texPath);
        Files.deleteIfExists(pdfPath);

        // Step 8: Return PDF as HTTP response
        return ResponseEntity.ok()
                .header("Content-Type", "application/pdf")
                .header("Content-Disposition", "attachment;filename=generated_resume.pdf")
                .body(pdfBytes);
    }
}
