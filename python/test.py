import arcade

class GameView(arcade.View):

    def __init__(self):
        super().__init__()
        self.background_color = arcade.color.GRAY

        # 1. Create the SpriteList
        self.sprites = arcade.SpriteList()

        self.player = arcade.Sprite("assets/images/cat.png", scale=0.1)
        self.player.position = self.center  # center sprite on screen
        self.sprites.append(self.player)  # Append the instance to the SpriteList

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