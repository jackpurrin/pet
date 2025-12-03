function love.load()
    love.graphics.setBackgroundColor(0.2,0,0)
end
function love.draw()
    local width, height = love.graphics.getDimensions()
    width = width / 2
    height = height / 2
    love.graphics.print("Hello World!", width, height)
end