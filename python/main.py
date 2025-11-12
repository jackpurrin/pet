import pygame
import sys

# Initialize Pygame
pygame.init()

# Window size
WIDTH, HEIGHT = 800, 600

# Create the display surface
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Basic Pygame Frame")

# Clock to control the frame rate
clock = pygame.time.Clock()

# Main game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Fill the screen with a color (RGB)
    screen.fill((30, 30, 30))

    # Update the display
    pygame.display.flip()

    # Limit FPS to 60
    clock.tick(60)

# Quit Pygame safely
pygame.quit()
sys.exit()
