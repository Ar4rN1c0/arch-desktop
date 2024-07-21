const std = @import("std");

pub fn main() !void {
    var i: usize = 0;
    while (i < 5000000000) : (i += 1) {
        std.debug.print("Hello end! {}\n", .{i});
    }
}
