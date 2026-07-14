/// Mega Hotter & Mega Cooler - powerful heating/cooling devices
/// Version 1.1 – added 999K Hotter and 999K Cooler

// MEGA HOTTER – heats all nearby pixels by +50°C per tick in a 10‑pixel radius
elements.mega_hotter = {
    color: "#ff2200",
    tick: function(pixel) {
        for (let i = -10; i <= 10; i++) {
            for (let j = -10; j <= 10; j++) {
                const checkX = pixel.x + j;
                const checkY = pixel.y + i;
                if (!isEmpty(checkX, checkY) && !outOfBounds(checkX, checkY)) {
                    pixelMap[checkX][checkY].temp += 50;
                }
            }
        }
    },
    category: "machines",
    insulate: true,
    state: "solid",
    desc: "MEGA HOTTER – heats everything within 10 pixels by +50°C per tick"
};

// MEGA COOLER – cools all nearby pixels by -50°C per tick (min -273°C)
elements.mega_cooler = {
    color: "#0022ff",
    tick: function(pixel) {
        for (let i = -10; i <= 10; i++) {
            for (let j = -10; j <= 10; j++) {
                const checkX = pixel.x + j;
                const checkY = pixel.y + i;
                if (!isEmpty(checkX, checkY) && !outOfBounds(checkX, checkY)) {
                    if (pixelMap[checkX][checkY].temp > -273) {
                        pixelMap[checkX][checkY].temp -= 50;
                        if (pixelMap[checkX][checkY].temp < -273) {
                            pixelMap[checkX][checkY].temp = -273;
                        }
                    }
                }
            }
        }
    },
    category: "machines",
    insulate: true,
    state: "solid",
    desc: "MEGA COOLER – cools everything within 10 pixels by -50°C per tick (min -273°C)"
};

// 999K HOTTER – instantly sets nearby pixels to 999,999°C in a 3‑pixel radius
elements["999k_hotter"] = {
    color: "#ff6600",
    tick: function(pixel) {
        for (let i = -3; i <= 3; i++) {
            for (let j = -3; j <= 3; j++) {
                const checkX = pixel.x + j;
                const checkY = pixel.y + i;
                if (!isEmpty(checkX, checkY) && !outOfBounds(checkX, checkY)) {
                    pixelMap[checkX][checkY].temp = 999999;
                }
            }
        }
    },
    category: "machines",
    insulate: true,
    state: "solid",
    desc: "999K HOTTER – sets temperature of all pixels within 3 pixels to 999,999°C"
};

// 999K COOLER – instantly sets nearby pixels to -999,999°C in a 3‑pixel radius
elements["999k_cooler"] = {
    color: "#0066ff",
    tick: function(pixel) {
        for (let i = -3; i <= 3; i++) {
            for (let j = -3; j <= 3; j++) {
                const checkX = pixel.x + j;
                const checkY = pixel.y + i;
                if (!isEmpty(checkX, checkY) && !outOfBounds(checkX, checkY)) {
                    pixelMap[checkX][checkY].temp = -999999;
                }
            }
        }
    },
    category: "machines",
    insulate: true,
    state: "solid",
    desc: "999K COOLER – sets temperature of all pixels within 3 pixels to -999,999°C"
};
