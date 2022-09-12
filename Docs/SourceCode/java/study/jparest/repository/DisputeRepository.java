package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import study.jparest.Entity.Dispute;

@Repository
public interface DisputeRepository extends JpaRepository<Dispute,Integer>{

}
