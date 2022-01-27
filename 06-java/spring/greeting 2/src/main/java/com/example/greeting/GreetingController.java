package com.example.greeting;

import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
@RestController
@CrossOrigin(origins = "http://localhost:3001/")
public class GreetingController {
    ArrayList <Greeting> greetings = new ArrayList<Greeting>();
    @Autowired
    GreetingRepository repository;

    @GetMapping("/greetings")
    public ResponseEntity<List<Greeting>> getGreetings(){
        return ResponseEntity.status(HttpStatus.OK).body(repository.findAll());

    }

    @GetMapping("/greeting/{id}")
    public ResponseEntity<Greeting> getGreetingById(@PathVariable String id){
        return ResponseEntity.status(HttpStatus.OK).body(repository.findGreetingByid(Integer.parseInt(id)));
    }

    @DeleteMapping("/greeting/{id}")
    @Transactional
    public ResponseEntity<String> deleteMapping (@PathVariable String id){
        repository.deleteGreetingByid(Integer.parseInt(id));
        return ResponseEntity.status(HttpStatus.OK).body("Greeting with ID" + id + " has been deleted");
    }
//    ///Gets the full list of greetings and saved it as a new variable
//    List<Greeting> greetings = getGreetings();
//    ///Returns the array as a stream so that we can manipulated it
//    return greetings.stream()
//            ///Filter out the greetings with an id that match the integer of the path var
//            .filter(greeting -> greeting.getId() == Integer.parseInt(id))
//            //Return the first value
//            .findFirst()
//            .orElse(null);
//    }
//    @GetMapping("/randomgreeting")
//    public Greeting getRandomGreeting(){
//        List <Greeting> greetingsAll = getGreetings();
//        int lengthGreeting = greetingsAll.size();
//        Random randomNum = new Random();
//        int n = randomNum.nextInt(lengthGreeting);
//        return repository.findGreetingByid(n);
//    }
    @PostMapping("/greeting")
    public ResponseEntity<String> createGreeting(@RequestBody Greeting greeting){
        repository.save(greeting);
        return ResponseEntity.status(HttpStatus.CREATED).body("Greeting added " + greeting.getGreeting());
    }
//    @DeleteMapping("/greetings/remove")
//    public String deleteGreeting(@RequestBody String deleteThis){
//        int index = greetings.indexOf(deleteThis);
//        greetings.remove(index);
//        return deleteThis + "removed";
//    }
}
