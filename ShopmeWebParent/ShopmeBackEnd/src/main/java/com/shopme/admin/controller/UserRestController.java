package com.shopme.admin.controller;

import com.shopme.admin.service.UserService;
import com.shopme.common.entity.User;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserRestController {

    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/save") //RequestBody to handle JsonObject
    public User saveUser(@RequestBody User user) {

        userService.save(user);

        return user;

    }

    @GetMapping(value = "/save")
    public List<User> listStudents() {
        List<User> listUsers = userService.listAll();
        return listUsers;
    }


}
