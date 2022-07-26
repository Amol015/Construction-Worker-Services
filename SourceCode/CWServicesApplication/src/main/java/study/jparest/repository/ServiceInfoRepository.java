package study.jparest.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import study.jparest.Entity.ServiceInfo;

@Repository
public interface ServiceInfoRepository extends JpaRepository<ServiceInfo, Integer>{

	@Query(value="select * from service_info_tbl where service_name=:serviceName",nativeQuery =true)
	void deleteByName(String serviceName);

}
