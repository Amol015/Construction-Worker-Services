package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import study.jparest.Entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review,Integer>{

}
