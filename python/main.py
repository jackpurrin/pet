import arcade

WINDOW_WIDTH = 640
WINDOW_HEIGHT = 480
WINDOW_TITLE = "Starting Template (main.py)"

class GameView(arcade.View):
    def __init__(self):
        super().__init__()
        self.background_color = arcade.color.GRAY
    def on_draw(self):
        self.clear()
 
def main():
    window = arcade.Window(WINDOW_WIDTH, WINDOW_HEIGHT, WINDOW_TITLE)
    game = GameView()
    window.show_view(game)
    arcade.run()

if __name__ == "__main__":
    main()