package study.jparest.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.jparest.Entity.ServiceProvider;

@Repository
public interface ServiceProviderRepository extends JpaRepository<ServiceProvider,Integer>{

	ServiceProvider findByEmailId(String email);

	@Query(value="select * from service_provider_info_tbl where provider_email_id=:eid and provider_password=:pwd",nativeQuery = true)
	ServiceProvider checkLogin(String eid, String pwd);

	List<ServiceProvider> findByRole(String role);

	//ServiceProvider addServiceProvider(ServiceProvider sp);

	//ServiceProvider addServiceProvider(ServiceProvider sp);




}
