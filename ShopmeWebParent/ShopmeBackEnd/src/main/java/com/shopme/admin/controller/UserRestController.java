package com.shopme.admin.controller;

import com.shopme.admin.service.UserService;
import com.shopme.common.entity.ServiceResponse;
import com.shopme.common.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
public class UserRestController {

    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/users/save") //RequestBody to handle JsonObject
    public User saveUser(@RequestBody User user) {

        return userService.save(user);

    }

    @GetMapping(value = "/users/list")
    public List<User> listStudents() {
        List<User> listUsers = userService.listAll();
        return listUsers;
    }


}
