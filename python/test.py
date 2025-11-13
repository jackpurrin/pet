import arcade

class GameView(arcade.View):

    def __init__(self):
        super().__init__()
        # 1. Create the SpriteList
        self.sprites = arcade.SpriteList()

        # 2. Create & append your Sprite instance to the SpriteList
        self.broken = arcade.Sprite()  # Sprite with the default texture
        self.broken.position = self.center  # center sprite on screen
        self.sprites.append(self.broken)  # Append the instance to the SpriteList

    def on_draw(self):
        self.clear()
        self.sprites.draw()


def main():
    """ Main function """
    window = arcade.Window(640, 480, "Minimal SPrite Example (test.py)")
    game = GameView()
    window.show_view(game)
    arcade.run()

if __name__ == "__main__":
    main()