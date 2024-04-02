def validate_types(*args):
    for arg in args:
        if not isinstance(arg, int):
            return False
    return True