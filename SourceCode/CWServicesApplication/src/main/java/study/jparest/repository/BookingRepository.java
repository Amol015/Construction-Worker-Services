package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import study.jparest.Entity.Booking;


@Repository
public interface BookingRepository extends JpaRepository<Booking,Integer>{

}
