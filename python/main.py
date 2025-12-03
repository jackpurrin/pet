import time
import os

# Stands for In Game Time
igt = 0
hunger = 50
happiness = 50
money = 1000
sleeping = False

while (True) :
    # Prints the current time and hunger using formatted strings
    print(f"Time is : {igt}")
    print(f"My hunger is: {hunger}")

    time.sleep(1)
    # Passes the time
    igt = igt + 1
    # Clears the terminal to make it look nice.
    os.system('cls' if os.name == 'nt' else 'clear')
    # Reset the day after 24 hours
    if (igt >= 24):
        igt = 0
    # Sleeps from 12 - 8
    if (igt <= 8) :
        sleeping = True
        print("Sleeping.")
    else :
        sleeping = False
        print("Awake.")
    # Decreases hunger and happiness when awake
    if (sleeping == False):
        happiness -= .5
        hunger -= 1