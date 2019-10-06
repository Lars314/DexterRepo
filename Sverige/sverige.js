/*
UDXS Dexter Smartwatch Operating System
Copyright (C) 2019 Davit Markarian and Contributors.
Watchface "designed" by Lars Borchert based on the
example Map Watchface by Davit Markarian.
Available under the MIT License.

Sverige Watchface

This watchface displays the time along
with the glorious flag of Sweden in the
background.
*/

let myFace = new dexter.ui.page(); // New fullscreen page for our watchfaces

let layout = new dexter.ui.absoluteLayout() // No fancy positioning/scrolling needed here, just absolute pixel positions.
myFace.setLayout(layout)

let mapVector = new Dexter.ui.vectorCanvas(0, 0, 240, 240) // Construct a Vector Canvas with a window the same size as the screen, with no offset

mapVector.x = 0
mapVector.y = 0

mapVector.width = myFace.width
mapVector.height = myFace.height

mapVector.background = new dexter.color(0, 106, 168)   // glorious Svensk blue

layout.add(mapVector) // We need to add the mapVector first so it's on the bottom.

mapVector.setLineColor(new dexter.color(255, 204, 0)) // beautiful Svensk gold
mapVector.drawLine([0, 120, 240, 120, 20], [80, 0, 80, 240, 20], dexter.ui.square, dexter.ui.square)

let time = new dexter.ui.tlabel("@fonts/roboto", 48, dexter.ui.bold)
time.alignment = dexter.ui.center // Horizontally align the text to the center.
time.color = new dexter.color(50, 50, 50) //  Set color to a dark grey.

// put the time where it isn't obstructed by the flag cross
time.x = myFace.width * 2 / 3
time.y = 60

// Add the time label to our layout.
layout.add(time)

dexter.time.handleChange(dexter.time.minutes, function(currentTime) {
    time.text = currentTime.hour + ":" + currentTime.minutes
    myFace.draw()
})

return myFace