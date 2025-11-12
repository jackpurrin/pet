from pygame import *
import sys

# WINDOW STUFFS
# Lets leave the FPS value @ 1. When we get further into dev, change this to 60.
FPS = 1
FONT_SIZE = 16
WIDTH, HEIGHT = 800, 600
TITLE = "Basic Pygame Project"

# COLORS
BACKGROUND = (30, 30, 30)
WHITE = (255, 255, 255)

# GAME VALUES
money = 0

# Initialize Pygame
init()

font = font.Font('assets/fonts/main.ttf', FONT_SIZE)

# Create the display surface
screen = display.set_mode((WIDTH, HEIGHT))
display.set_caption(TITLE)

# Clock to control the frame rate
clock = time.Clock()

# Main game loop
running = True
while running:
    # Handle events
    for e in event.get():
        if e.type == QUIT:
            running = False

    # Fill the screen with a color (RGB)
    screen.fill(BACKGROUND)

    # This is where we make a text box
    text = font.render(str(money), True, WHITE, BACKGROUND)
    textbox = text.get_rect()
    textbox.center = (WIDTH // 2, HEIGHT // 2)
    screen.blit(text, textbox)

    # Update the display
    display.flip()

    clock.tick(FPS)

# Quit Pygame safely
quit()
sys.exit()
