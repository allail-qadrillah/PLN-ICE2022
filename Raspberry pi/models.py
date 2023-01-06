def ignore_first_call(fn):
    called = False
    def wrapper(*args, **kwargs):
        nonlocal called
        if called:
            return fn(*args, **kwargs)
        else:
            called = True
            return None
    return wrapper



