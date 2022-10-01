package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.jparest.Entity.Customer;
import study.jparest.Entity.ServiceProvider1;

@Repository
public interface CustomerRepository  extends JpaRepository<Customer,Integer>{

	@Query(value="select * from customer_info_tbl where customer_userName=:userName and customer_password=:pwd",nativeQuery = true)
	Customer checkLogin(String userName, String pwd);

	Customer findByEmailId(String email);
	
	Customer findByResetPasswordToken(String token);

}
