import time
import os

time, hunger, mood, cash = 7, 50, 50, 1000
sleeping, running = False, True

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
    print(f"Current happiness level: {mood}")
    print(f"Current hunger is: {hunger}")
    print(f"Current amount of cash is: {cash}")

def addtime():
    global time
    if time >= 24:
        time = 0
    else: 
        time += 1

clear()

print("Which do you want? A cat or a dog?")

pet = input()

while(running):
    addtime()
    clear()

    if pet == "cat":
        print(cat)
    elif pet == "dog":
        print(dog)

    print("Type 'help' for help!")
    print("Type 'stats' to check the stats!")
    print(f"Hour is: {time}")
    userInput = input()

    if userInput == "help":
        clear()        
        help()
    elif userInput == "stats":
        clear()
        stats()