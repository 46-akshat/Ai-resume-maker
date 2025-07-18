package com.project.AI.Resume.Maker.utils;
import com.project.AI.Resume.Maker.model.ResumeFields;

import java.io.IOException;
import java.lang.reflect.Field;
import java.nio.file.Files;
import java.nio.file.Path;
public class TemplateFiller {
    public static String fillTemplate(Path templatepath, ResumeFields fields) throws IOException{
        String template=Files.readString(templatepath);
         for(Field field:ResumeFields.class.getDeclaredFields()) {//using Java Reflection
             field.setAccessible(true);
             String key = "{{{" + field.getName() + "}}}";//creating a placeholder
             try {
                 String value = (String) field.get(fields);
                 if (value == null) value = "";
                 value = value.replace("\\", "\\textbackslash{}") // escape backslashes
                         .replace("_", "\\_");              // escape underscores

                 template = template.replace(key, value);
             } catch (IllegalAccessException e) {
                 e.printStackTrace();
             }
         }

        return template;
    }
}
