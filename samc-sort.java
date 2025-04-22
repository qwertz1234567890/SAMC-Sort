import java.util.*;

public class SamcSort {
    static Random rand = new Random();

    public static List<Integer> sort(List<Integer> arr, int depth) {
        if (arr.size() <= 1) return arr;

        String indent = "  ".repeat(depth);
        System.out.println(indent + "<!-- Sorting " + arr + " -->");

        int pivot = Collections.max(arr);
        System.out.println(indent + "<h2 class='pivot'>Chosen Alpha: " + pivot + "</h2>");

        List<Integer> left = new ArrayList<>();
        List<Integer> right = new ArrayList<>();

        for (int num : arr) {
            if (num == pivot) continue;
            if (num < pivot) {
                System.out.println(indent + "<p class='insult'>" + randomInsult() + " (" + num + ")</p>");
                left.add(num);
            } else {
                System.out.println(indent + "<p class='retort'>" + randomRetort() + " (" + num + ")</p>");
                right.add(0, num);
            }
        }

        List<Integer> sorted = new ArrayList<>();
        sorted.addAll(sort(left, depth + 1));
        sorted.add(pivot);
        sorted.addAll(sort(right, depth + 1));
        return sorted;
    }

    static String randomInsult() {
        String[] insults = {
            "Pathetic. Go back to school.",
            "Your value is trash.",
            "I’ve seen better values in a Drupal theme."
        };
        return insults[rand.nextInt(insults.length)];
    }

    static String randomRetort() {
        String[] retorts = {
            "You think you're better than me?",
            "Nice try.",
            "Overcompensating, aren't you?"
        };
        return retorts[rand.nextInt(retorts.length)];
    }
}
