create database cws;
use cws;
DROP TABLE IF EXISTS service_provider_info_tbl;
create TABLE service_provider_info_tbl(provider_id int PRIMARY KEY Auto_INCREMENT,
									provider_firstname varchar(20),
									provider_lastname VARCHAR(20),
									provider_mobile bigint(12),
									provider_username VARCHAR(30),
									provider_password varbinary(30),
									provider_email_id VARCHAR(50),
									provider_city varchar(50),
									provider_is_verified BOOLEAN);
-- --show tables;
-- --desc  service_provider_info_tbl;
-- ------------------------------------------------------------------
DROP TABLE IF EXISTS service_info_tbl;
create TABLE service_info_tbl(service_id int PRIMARY KEY Auto_INCREMENT,
											provider_id int,
											service_name VARCHAR(50),
											service_charges int(12),
											provider_time TIME,
											numberof_service_perday int(12),
                                             FOREIGN KEY (provider_id) REFERENCES service_provider_info_tbl(provider_id));
                                            
 -- desc service_info_tbl;										
 /* customer table      */                                    
DROP TABLE IF EXISTS customer_info_tbl;
create TABLE customer_info_tbl(customer_id int PRIMARY KEY Auto_INCREMENT,	
										customer_firstname varchar(20),
											customer_lastname VARCHAR(20),
											customer_mobile bigint(12),
											customer_username VARCHAR(30),
											customer_password varbinary(30),
											customer_email_id VARCHAR(50),
											customer_address varchar(50));
-- desc customer_info_tbl	;										                                    
                                            
 -- booking table -- ---------------------------
 
DROP TABLE IF EXISTS booking_tbl;
create TABLE booking_tbl(booking_id int PRIMARY KEY Auto_INCREMENT,
											provider_id int,
											customer_id int,
											service_id int,
											service_date date,											
											service_time TIME,
											booking_date date,
                                            booking_status varchar(20),
                                            discount double,
                                            total_amount double,
                                            service_address varchar(100),
                                            service_contact_person bigint(12),                                          
											FOREIGN KEY (provider_id) REFERENCES service_provider_info_tbl(provider_id),
											FOREIGN KEY (service_id) REFERENCES service_info_tbl(service_id),
                                            FOREIGN KEY (customer_id) REFERENCES customer_info_tbl(customer_id));                                           
                                            
                                            
--  desc booking_tbl;       
                                            
DROP TABLE IF EXISTS dispute_tbl;
create TABLE dispute_tbl(dispute_id int PRIMARY KEY Auto_INCREMENT,
											booking_id int,
											dispute_info VARCHAR(100),
											raise_date date,
											resolve_date date,
											dispute_status varchar(50),
											FOREIGN KEY (booking_id) REFERENCES booking_tbl(booking_id));                                           
                                         
   -- -----------------------------------------------------------------
   -- review table
   
DROP TABLE IF EXISTS review_tbl;
create TABLE review_tbl(review_id int PRIMARY KEY Auto_INCREMENT,
											customer_id int,
                                          					  	booking_id int,
											review_comment VARCHAR(50),
											review_rating double,
                                            FOREIGN KEY (booking_id) REFERENCES booking_tbl(booking_id),
											FOREIGN KEY (customer_id) REFERENCES customer_info_tbl(customer_id));   
                                            
 -- desc  review_tbl;                                         
                                            
                                            
                                            
                                            
                                            
