package study.jparest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.jparest.Entity.ServiceProvider1;

@Repository
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider1,Integer>{

	ServiceProvider1 findByEmailId(String email);

	@Query(value="select * from service_provider_info_tbl where provider_email_id=:eid and provider_password=:pwd",nativeQuery = true)
	ServiceProvider1 checkLogin(String eid, String pwd);

	List<ServiceProvider1> findByRole(String role);

	//ServiceProvider addServiceProvider(ServiceProvider sp);

	//ServiceProvider addServiceProvider(ServiceProvider sp);




}
