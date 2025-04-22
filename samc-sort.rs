fn samc_sort(arr: Vec<i32>, depth: usize) -> Vec<i32> {
    let indent = "  ".repeat(depth);
    if arr.len() <= 1 {
        return arr;
    }

    println!("{}<!-- Sorting {:?} -->", indent, arr);
    let pivot = *arr.iter().max().unwrap();
    println!("{}<h2 class='pivot'>Chosen Alpha: {}</h2>", indent, pivot);

    let mut left = Vec::new();
    let mut right = Vec::new();

    for &num in arr.iter() {
        if num == pivot {
            continue;
        }
        if num < pivot {
            println!("{}<p class='insult'>{} ({})</p>", indent, random_insult(), num);
            left.push(num);
        } else {
            println!("{}<p class='retort'>{} ({})</p>", indent, random_retort(), num);
            right.insert(0, num);
        }
    }

    let mut sorted = samc_sort(left, depth + 1);
    sorted.push(pivot);
    sorted.extend(samc_sort(right, depth + 1));
    sorted
}

fn random_insult() -> &'static str {
    let insults = [
        "You disgust me, number.",
        "Not even close to Amazon.",
        "Your value is embarrassing."
    ];
    let i = rand::random::<usize>() % insults.len();
    insults[i]
}

fn random_retort() -> &'static str {
    let retorts = [
        "Overcompensating?",
        "Get back in your lane.",
        "You wish you were better."
    ];
    let i = rand::random::<usize>() % retorts.len();
    retorts[i]
}
