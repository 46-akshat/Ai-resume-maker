package com.project.AI.Resume.Maker.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Files;
import java.nio.file.Path;

public class LatexCompiler {
       public static byte[] compiletopdf(String texpath,String outputpdf)throws IOException{

           ProcessBuilder builder = new ProcessBuilder(
                   "C:\\texlive\\2025\\bin\\windows\\pdflatex.exe", texpath
           );
           builder.redirectErrorStream(true);

           try {
               Process process = builder.start();

               // ✅ Log LaTeX output safely
               BufferedReader reader = new BufferedReader(
                       new InputStreamReader(process.getInputStream())
               );
               StringBuilder outputLog = new StringBuilder();
               String line;
               while ((line = reader.readLine()) != null) {
                   outputLog.append(line).append("\n");
                   // Optional: print for debug
                   System.out.println(line);
               }

               // ✅ Wait until process ends
               int exitCode = process.waitFor();
               if (exitCode != 0) {
                   throw new IOException("pdflatex failed (exit code " + exitCode + "):\n" + outputLog);
               }

               Path pdfPath = Path.of(outputpdf);
               if (!Files.exists(pdfPath)) {
                   throw new IOException("PDF not generated. Check LaTeX output.");
               }

               return Files.readAllBytes(pdfPath);

           } catch (InterruptedException e) {
               Thread.currentThread().interrupt();
               throw new IOException("LaTeX process interrupted", e);
           }

       }

}
