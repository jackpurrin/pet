import time
import os

# Stands for In Game Time
igt = 0
hunger = 50

while (True) :
    print(f"Time is : {igt}")
    time.sleep(1)
    igt = igt + 1
    os.system('cls' if os.name == 'nt' else 'clear')
    if (igt >= 24):
        igt = 0
        hunger -= 16
        print(f"My hunger is: {hunger}")
    if (igt <= 8) :
        print("Sleeping.")