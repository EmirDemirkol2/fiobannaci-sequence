basic.forever(function () {
	
})
while True:
    # Move LED from left to right
for x in range(5):
    display.clear()
display.set_pixel(x, 2, 9)  # Middle row(2), brightness at max(9)
sleep(200)
    # Move LED from right to left
for x in range(3, -1, -1):
    display.clear()
display