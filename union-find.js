function unionFind(n) {

    cnt = length = n;
    id = new Array(n);
    sz = new Array(n);

    for (var i = 0; i < n; i++) {
        id[i] = i;
        sz[i] = 1;
    }

    this.showData = function() {
        return id;
    };

    this.size = function() {
        return length;
    };

    this.count = function() {
        return cnt;
    };

    this.root = function(i) {
        while (i != id[i]) {
            id[i] = id[id[i]];
            i = id[i];
        }
        return i;
    };

    this.connected = function(p, q) {
        return this.root(p) === this.root(q);
    };

    this.union = function(p, q) {
        var i = this.root(p);
        var j = this.root(q);
        if (i === j) return;
        if (sz[i] < sz[j]) {
            id[i] = j;
            sz[j] += sz[i];
        } else {
            id[j] = i;
            sz[i] += sz[j];
        }
    };
}

myData = new unionFind(5);