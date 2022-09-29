## Important note

The `WebSecurityConfigurerAdapter` is deprecated in Spring Boot version 2.7. 
You can still use Spring Boot version 2.6.x by changing the version in your pom.xml file, for example
```
	<modelVersion>4.0.0</modelVersion>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.6.12</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>
```
You can also see how this is done without `WebSecurityConfigurerAdapter` from the Baeldung blog https://www.baeldung.com/spring-deprecated-websecurityconfigureradapter
