package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import study.jparest.Entity.Customer;

@Repository
public interface CustomerRepository  extends JpaRepository<Customer,Integer>{

}
