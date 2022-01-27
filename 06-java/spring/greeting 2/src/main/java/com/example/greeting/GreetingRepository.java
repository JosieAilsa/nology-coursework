package com.example.greeting;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository

public interface GreetingRepository extends JpaRepository <Greeting, String>{
        // Where we would write custom methods
    Greeting findGreetingByid(int id);

    String deleteGreetingByid(int id);
}
