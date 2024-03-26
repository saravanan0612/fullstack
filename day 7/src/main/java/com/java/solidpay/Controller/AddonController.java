package com.java.solidpay.Controller;

import com.java.solidpay.model.Addon;
import com.java.solidpay.Service.AddonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addons")
public class AddonController {

    @Autowired
    private AddonService addonService;

    @PostMapping
    public ResponseEntity<Addon> createAddon(@RequestBody Addon addon) {
        Addon createdAddon = addonService.createAddon(addon);
        return new ResponseEntity<>(createdAddon, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Addon>> getAllAddons() {
        List<Addon> addons = addonService.getAllAddons();
        return new ResponseEntity<>(addons, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Addon> getAddonById(@PathVariable String id) {
        Addon addon = addonService.getAddonById(id);
        if (addon != null) {
            return new ResponseEntity<>(addon, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Addon> updateAddon(@PathVariable String id, @RequestBody Addon addon) {
        Addon updatedAddon = addonService.updateAddon(id, addon);
        if (updatedAddon != null) {
            return new ResponseEntity<>(updatedAddon, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAddon(@PathVariable String id) {
        addonService.deleteAddon(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
