import React from "react";

export default function SeasonalColorVariant(hex0, hex1, hex2, hex3, month, day) {

    // transform date into numeric step value

    var dateV = ((month + 1) * 30) + day;


    const hexToRgbConverter = (hexColor) => {

        // Remove the '#' from the beginning of the hex color
        const cleanedHex = hexColor.replace(/^#/, '');
    
        // Parse the hex color into RGB components
        var r = parseInt(cleanedHex.substring(0, 2), 16);
        var g = parseInt(cleanedHex.substring(2, 4), 16);
        var b = parseInt(cleanedHex.substring(4, 6), 16);

        return {r, g, b}
      
    };

    var rgb0 = hexToRgbConverter(hex0);
    var rgb1 = hexToRgbConverter(hex1);
    var rgb2 = hexToRgbConverter(hex2);
    var rgb3 = hexToRgbConverter(hex3);

    // interpolates gradient step for rgb values

    if (dateV < 91) {
        var r = Math.round( rgb0.r + (rgb1.r - rgb0.r) * ((dateV)/91)) 
        var g = Math.round( rgb0.g + (rgb1.g - rgb0.g) * ((dateV)/91)) 
        var b = Math.round( rgb0.b + (rgb1.b - rgb0.b) * ((dateV)/91))

    }
        else if (dateV > 91 && dateV < 182)
    {
        var r = Math.round( rgb1.r + (rgb2.r - rgb1.r) * ((dateV-91)/91)) 
        var g = Math.round( rgb1.g + (rgb2.g - rgb1.g) * ((dateV-91)/91)) 
        var b = Math.round( rgb1.b + (rgb2.b - rgb1.b) * ((dateV-91)/91))
    }
        else if (dateV > 182 && dateV < 273) 
    {
        var r = Math.round( rgb2.r + (rgb3.r - rgb2.r) * ((dateV-182)/91)) 
        var g = Math.round( rgb2.g + (rgb3.g - rgb2.g) * ((dateV-182)/91)) 
        var b = Math.round( rgb2.b + (rgb3.b - rgb2.b) * ((dateV-182)/91)) 

    }
        else if (dateV > 273)
    {
        var r = Math.round( rgb3.r + (rgb0.r - rgb3.r) * ((dateV-273)/91)) 
        var g = Math.round( rgb3.g + (rgb0.g - rgb3.g) * ((dateV-273)/91)) 
        var b = Math.round( rgb3.b + (rgb0.b - rgb3.b) * ((dateV-273)/91)) 
    }
   
    // returns rbg values as hexadecimal string

    var col = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    

    return {
        col
    }
        
    
}