package com.java.solidpay.Service;

import com.java.solidpay.model.Addon;

import java.util.List;

public interface AddonService {
    Addon createAddon(Addon addon);

    List<Addon> getAllAddons();

    Addon getAddonById(String id);

    Addon updateAddon(String id, Addon addon);

    void deleteAddon(String id);
}
