package com.shopme.admin.controller;

import com.shopme.admin.service.UserService;
import com.shopme.common.entity.Role;
import com.shopme.common.entity.User;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public String listAll() {

//        List<Role> listRoles = userService.listRoles();
//
//        User user = new User();
//        user.setEnabled(true);
//
//        List<User> listUsers = userService.listAll();
//        model.addAttribute("listUsers", listUsers);
//        model.addAttribute("user", user);
//        model.addAttribute("listRoles", listRoles);

        return "users/users";
    }

//    @GetMapping("/users/new")
//    public String newUser(Model model) {
//        List<Role> listRoles = userService.listRoles();
//
//        User user = new User();
//        user.setEnabled(true);
//
//        model.addAttribute("user", user);
//        model.addAttribute("listRoles", listRoles);
//
//        return "users/user_form";
//    }

//    @PostMapping("/users/save")
//    public String saveUser(User user, RedirectAttributes redirectAttributes) {
//        userService.save(user);
//
//        redirectAttributes.addFlashAttribute("message", "The user has been saved !");
//
//        return "redirect:/users";
//    }

}
