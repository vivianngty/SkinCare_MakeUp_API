package com.example.server.repository;

import com.example.server.model.Serum;
import org.springframework.data.repository.CrudRepository;

public interface SerumRepository extends CrudRepository<Serum, Long> {
}
