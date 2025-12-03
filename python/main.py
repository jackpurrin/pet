import time
import os

# Stands for In Game Time
igt = 0
hunger = 50
happiness = 50
money = 1000
sleeping = False
running = True

cat = """\
      \    //
       )  ( ')
      (  /  )
       \(__)|
"""

dog = """\
           __
      (___()'`;
      /,    /`
      //"--//

"""

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

def help():
    print("Type 'f' to feed")
    print("Type 'p' to play")
    print("Type 's to put the pet to sleep'")
    print("Type 'h' to send to hospital")
    print("Press enter to close")
    input()

def stats():
    pass


print("Which do you want? A cat or a dog?")

pet = input()

while(running):
    clear()

    if pet == "cat":
        print(cat)
    elif pet == "dog":
        print(dog)

    print("Type 'help' for help!")
    print("Type 'stats' to check the stats!")
    userInput = input()

    if userInput == "help":
        clear()        
        help()
    elif userInput == "stats":
        clear()
        stats()