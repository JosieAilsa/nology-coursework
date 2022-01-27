package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@SpringBootApplication(exclude = DataSourceAutoConfiguration.class)
public class DemoApplication {
	private ArrayList<String> names = new ArrayList<>(Arrays.asList("Ash", "Dan", "Stu"));

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
		}

		@GetMapping("/names")
		public ArrayList<String> getWelcomeMessage() {
			return names;
		}


		@GetMapping("/name/{name}")
		public String getNameByName(@PathVariable String name){
			return "Welcome to my application";
		}


		@PostMapping("/welcome/create")
		public String addName(@RequestBody String name) {
		names.add(name);
		return name + " has been added!";

	}

}
