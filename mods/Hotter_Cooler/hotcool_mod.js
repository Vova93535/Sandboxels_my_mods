/// Mega Hotter & Mega Cooler - мощные нагреватель и охладитель для Sandboxels
/// Версия 1.2 — исправлено для официального API

// MEGA HOTTER – нагревает всё вокруг на 50°C за тик в радиусе 10 клеток
elements.mega_hotter = {
    color: "#ff2200",
    tick: function(pixel) {
        for (let i = -10; i <= 10; i++) {
            for (let j = -10; j <= 10; j++) {
                const checkX = pixel.x + j;
                const checkY = pixel.y + i;
                // Проверяем, что координаты в пределах холста
                if (checkX >= 0 && checkX < width && checkY >= 0 && checkY < height) {
                    const target = pixelMap[checkX][checkY];
                    // Проверяем, что клетка не пустая
                    if (target && target.element) {
                        target.temp += 50;
                    }
                }
            }
        }
    },
    category: "machines",
    insulate: true,
    state: "solid",
    desc: "MEGA HOTTER – нагревает всё вокруг на 50°C за тик в радиусе 10 пикселей"
};

// MEGA COOLER – охлаждает всё вокруг на 50°C за тик (не ниже -273°C)
elements.mega_cooler = {
    color: "#0022ff",
    tick: function(pixel) {
        for (let i = -10; i <= 10; i++) {
            for (let j = -10; j <= 10; j++) {
                const checkX = pixel.x + j;
                const checkY = pixel.y + i;
                if (checkX >= 0 && checkX < width && checkY >= 0 && checkY < height) {
                    const target = pixelMap[checkX][checkY];
                    if (target && target.element) {
                        if (target.temp > -273) {
                            target.temp -= 50;
                            if (target.temp < -273) target.temp = -273;
                        }
                    }
                }
            }
        }
    },
    category: "machines",
    insulate: true,
    state: "solid",
    desc: "MEGA COOLER – охлаждает всё вокруг на 50°C за тик в радиусе 10 пикселей (мин -273°C)"
};

// 999K HOTTER – мгновенно устанавливает температуру 999,999°C в радиусе 3 клеток
elements["999k_hotter"] = {
    color: "#ff6600",
    tick: function(pixel) {
        for (let i = -3; i <= 3; i++) {
            for (let j = -3; j <= 3; j++) {
                const checkX = pixel.x + j;
                const checkY = pixel.y + i;
                if (checkX >= 0 && checkX < width && checkY >= 0 && checkY < height) {
                    const target = pixelMap[checkX][checkY];
                    if (target && target.element) {
                        target.temp = 999999;
                    }
                }
            }
        }
    },
    category: "machines",
    insulate: true,
    state: "solid",
    desc: "999K HOTTER – устанавливает температуру всех пикселей в радиусе 3 клеток на 999,999°C"
};

// 999K COOLER – мгновенно устанавливает температуру -999,999°C в радиусе 3 клеток
elements["999k_cooler"] = {
    color: "#0066ff",
    tick: function(pixel) {
        for (let i = -3; i <= 3; i++) {
            for (let j = -3; j <= 3; j++) {
                const checkX = pixel.x + j;
                const checkY = pixel.y + i;
                if (checkX >= 0 && checkX < width && checkY >= 0 && checkY < height) {
                    const target = pixelMap[checkX][checkY];
                    if (target && target.element) {
                        target.temp = -999999;
                    }
                }
            }
        }
    },
    category: "machines",
    insulate: true,
    state: "solid",
    desc: "999K COOLER – устанавливает температуру всех пикселей в радиусе 3 клеток на -999,999°C"
};
