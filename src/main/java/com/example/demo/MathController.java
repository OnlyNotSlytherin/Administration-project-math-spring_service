package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MathController {
    @GetMapping("/main")
    public String indexPage() {
        return "index";
    }

    @GetMapping("/page1")
    public String page1() {
        return "page1";
    }

    @GetMapping("/page2")
    public String page2() {
        return "page2";
    }
    @GetMapping("/page3")
    public String page3() {
        return "page3";
    }
    @GetMapping("/page4")
    public String page4() {
        return "page4";
    }
    @GetMapping("/page5")
    public String page5() {
        return "page5";
    }
}
