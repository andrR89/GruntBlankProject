app.filter("exclamation", function() {
    return function(input, quantity) {
        return input + Array(quantity + 1).join("!");
    };
});
app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++)
        {
            input.push(i);
        }
        return input;
    };
});