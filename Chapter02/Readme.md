# Code snippets

```java
public class Car {
   private Owner owner;
   
   public Car() {
      owner = new Owner();
   }
}
```

```java
public class Car {
   private Owner owner;
   
   public Car(Owner owner) {
      this.owner = owner;
   }
}
```

```java
public class Car {
   private Owner owner;
   
   public void setOwner(Owner owner) {
      this.owner = owner;
   }
}
```

```java
public class Car {
   @Autowired
   private Owner owner;
   
   // continues
}
```

```java
public class Car {
   @Autowired
   private CarRepository carRepository;
   
    // Fetch all cars from db
    carRepositoty.findAll();
    //Continues
}
```

```java
@Configuration
public class ConfigFileResource {
 
    @Bean(name="configFile")
    public File configFile() {
        File configFile = new File("configFile.xml");
        return configFile;
    }
}
```

```java
// By bean name
@Resource(name="configFile")
private ConfigFile cFile

OR


// Without name
@Resource
private ConfigFile cFile
```
