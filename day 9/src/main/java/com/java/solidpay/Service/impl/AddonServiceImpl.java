package com.java.solidpay.Service.impl;

import com.java.solidpay.model.Addon;
import com.java.solidpay.Repository.AddonRepository;
import com.java.solidpay.Service.AddonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddonServiceImpl implements AddonService {

    @Autowired
    private AddonRepository addonRepository;

    @Override
    public Addon createAddon(Addon addon) {
        return addonRepository.save(addon);
    }

    @Override
    public List<Addon> getAllAddons() {
        return addonRepository.findAll();
    }

    @Override
    public Addon getAddonById(String id) {
        Optional<Addon> optionalAddon = addonRepository.findById(id);
        return optionalAddon.orElse(null);
    }

    @Override
    public Addon updateAddon(String id, Addon addon) {
        Optional<Addon> optionalAddon = addonRepository.findById(id);
        if (optionalAddon.isPresent()) {
            addon.setAddonId(id);
            return addonRepository.save(addon);
        }
        return null;
    }

    @Override
    public void deleteAddon(String id) {
        addonRepository.deleteById(id);
    }
}
