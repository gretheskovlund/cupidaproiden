class SafeArea {
    constructor() {
        this.regions = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }

    // Set the safe area insets
    setInsets(top, right, bottom, left) {
        this.regions.top = top;
        this.regions.right = right;
        this.regions.bottom = bottom;
        this.regions.left = left;
    }

    // Get the safe area insets
    getInsets() {
        return { ...this.regions };
    }

    // Check if a point is within the safe area
    isPointInSafeArea(x, y, width, height) {
        if (x < this.regions.left || x > width - this.regions.right) {
            return false;
        }
        if (y < this.regions.top || y > height - this.regions.bottom) {
            return false;
        }
        return true;
    }
}
