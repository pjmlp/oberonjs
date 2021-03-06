Ternary operator can be used as a shortcut for the IF/ELSE statement.

### Syntax

	condition ? a : b

_condition_ is a boolean expression.  
_a_ and _b_ are expressions to evaluate.  
The operator returns _a_ when condition is TRUE and _b_ when condition is FALSE. Ternary operator has lowest priority.

### Example

	PROCEDURE max(a, b: INTEGER): INTEGER;
	VAR
		result: INTEGER;
	BEGIN
		IF a > b THEN
			result := a;
		ELSE
			result := b;
		END;
		RETURN result;
	END;

This code above may be rewritten in much shorter and cleaner manner using ternary operator:

	PROCEDURE max(a, b: INTEGER): INTEGER;
		RETURN a > b ? a : b;
	END;

### Implicit Type Narrowing

Ternary operator supports [[Implicit Type Narrowing|eberon-implicit-type-narrowing]]:

    TYPE
        Base = RECORD END;
        Derived = RECORD (Base) derivedField: INTEGER END;

    PROCEDURE p(VAR b: Base): INTEGER;
        RETURN b IS Derived ? b.derivedField : 0
    END;        