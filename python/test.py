import pygame

# https://stackoverflow.com/questions/67608894/pygame-click-on-image-event

pygame.init()
screen = pygame.display.set_mode((640, 480))

image = pygame.image.load('assets/images/sponge.png')
image = image.convert_alpha()  # preserves transparency and optimizes blitting

while True: # main game loop
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            Loop = False

        if event.type == pygame.MOUSEBUTTONDOWN:
            egg_rect = resized_egg.get_rect(topleft = (260,150))
            if egg_rect.collidepoint(event.pos):
                totalbal += cps
                totalbalM = prettify(totalbal, '.')
                text = font.render(f'Your total clicks are {totalbalM}', True, WHITE)
                print("Your total clicks are", totalbalM, end="\r")