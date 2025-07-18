package com.project.AI.Resume.Maker.repository;

import com.project.AI.Resume.Maker.model.ResumeFields;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResumeRepo  extends MongoRepository<ResumeFields,String> {
}
