function enough(cap, on, wait) {
    const place = on + wait - cap;
    return place < 0 ? 0 : place;
}
