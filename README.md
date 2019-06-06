# Product-of-the-maximum-and-minimum-in-a-dataset

Motivation
I developed this using javascript for an assessment applying for a job.

I publish it for later reference for anyone for anything that might be needed.

# Description of the problem
The input data will be given as pairs of command and value. Valid commands are "push" and "pop" and the value is always integer. These operations are executed on a set of integers where the given value is stored and removed.

Each time any operation is executed, the minimum and the maximum must be calculated and the product of these two must be stored as part of the solution.

# Two examples are given:

# In the first example, we have the sequence

push 1
push 2
push 3
pop 1
# that must output

1
2
3
6
# The execution is like

push 1 -> set = {1}; min = 1; max = 1; product = 1
push 2 -> set = {1,2}; min = 1; max = 2; product = 2
push 3 -> set = {1,2,3}; min = 1; max = 3; product = 3
pop  1 -> set = {2,3}; min = 2; max = 3; product = 6
# In the second example, we have the sequence

push 3
push 2
# that must output

9
6
# The execution trace is

push 3 -> set = {3}; min = 3; max = 3; product = 9
push 2 -> set = {2,3}; min = 2; max = 3; product = 6
