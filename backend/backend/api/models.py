from django.db import models

# Create your models here.

class Weapons(models.Model):
    # Name of the weapon
    name = models.CharField(
        max_length=64,
        primary_key=True,
        verbose_name="Weapon Name"
    )
    # The availability of the weapon
    availability = models.IntegerField(
        verbose_name="Weapon Availability", 
        default=1
    )
    # False = Illegal, True = Legal
    # Depends on availability
    legal = models.BooleanField(
        verbose_name="Weapon Legality Flag",
        default=True
    )
    # Cost of the weapon
    cost = models.IntegerField(
        verbose_name="Weapon Cost", 
        default=0
    )
    # Type of weapon such as a blade, light pistol, etc.
    type = models.CharField(
        max_length=32, 
        verbose_name="Weapon Type"
    )
    # Damage value of the weapon
    dv = models.CharField(
        max_length=16, 
        verbose_name="Weapon Damage Value", 
        null=True, 
        blank=True, 
        default=""
    )
    # The type of damage the gun does if it is elemental in nature. e.g. electricity for tasers
    dv_element = models.CharField(
        max_length=16,
        verbose_name="Weapon Damage Value Element",
        null=True,
        blank=True,
        default=""
    )
    # What firing options the gun offers. e.g. Semi-automatic, full-automatic, etc.
    weapon_mode = models.CharField(
        max_length=16,
        verbose_name="Weapon Firing Options",
        null=True,
        blank=True,
        default=""
    )
    # What kind of ammo the gun requires such as 16(b), 10(c), 1(ml), 100(belt), etc.
    weapon_ammo = models.CharField(
        max_length=32,
        verbose_name="Weapon Ammo",
        null=True,
        blank=True,
        default=""
    )
    # What skill is required to use the weapon
    weapon_skill = models.CharField(
        max_length=16,
        verbose_name="Weapon Skill",
        null=True,
        blank=True,
        default=""
    )
    # Close range damage
    close = models.IntegerField(
        null=True
    )
    # Near range damage
    near = models.IntegerField(
        null=True
    )
    # Medium range damage
    medium = models.IntegerField(
        null=True
    )
    # Far range damange
    far = models.IntegerField(
        null=True
    )
    # Extreme range damage
    extreme = models.IntegerField(
        null=True
    )
    top = models.BooleanField(
        default=False
    )
    under = models.BooleanField(
        default=False
    )
    barrel = models.BooleanField(
        default=False
    )
    description = models.TextField(
        null=True, 
        blank=True, 
        default=""
    )
    # Wireless function of the weapon if it has one
    wireless = models.TextField(
        null=True, 
        blank=True, 
        default=""
    )
    note = models.TextField(
        null=True,
        blank=True,
        default=""
    )
    standard_upgrades = models.TextField(
        null=True,
        blank=True,
        default=""
    )
    add_rules = models.TextField(
        null=True,
        blank=True,
        default=""
    )
    # What rulebook the weapon is found in
    rulebook = models.CharField(
        max_length=64, 
        verbose_name="Weapon Rulebook Reference", 
        null=True, 
        blank=True, 
        default=""
    )
    ## How easy the weapon is concealed
    #concealability = models.IntegerField(
    #    verbose_name="Weapon Concealability", 
    #    default=10
    #)
    # The description for the weapon. May include mechanics.

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['name'], name='unique_weapon_name_constraint'),
            models.CheckConstraint(check=models.Q(type__isnull=False), name='not_null_weapon_type_constraint'),
            models.CheckConstraint(check=models.Q(availability__gte=1) & models.Q(availability__lte=9), name='weapon_availability_gte_1_lte_9'),
            #models.CheckConstraint(check=models.Q(concealability__gte=0) & models.Q(concealability__lte=10), name='weapon_concealability_gte_0_lte_10'),
            models.CheckConstraint(check=models.Q(cost__gte=0), name='weapon_cost_gte_0')
        ]

class WeaponMod(models.Model):
    name = models.CharField(
        max_length=64,
        primary_key=True,
        verbose_name="Mod Name"
    )
    type = models.CharField(
        max_length=32,
        verbose_name="Mod Type",
        default="ACCESSORY"
    )
    availability = models.IntegerField(
        verbose_name="Mod Availability",
        default=1
    )
    cost = models.IntegerField(
        verbose_name="Mod Cost",
        default=0
    )
    ability = models.TextField(
        null=True,
        blank=True,
        default=""
    )
    wireless = models.TextField(
        null=True,
        blank=True,
        default=""
    )
    rulebook = models.CharField(
        max_length=64,
        verbose_name="Mod Rulebook Reference",
        null=True,
        blank=True,
        default=""
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['name'], name='unique_mod_name_constraint'),
            models.CheckConstraint(check=models.Q(type__isnull=False), name='not_null_mod_type_constraint'),
            models.CheckConstraint(check=models.Q(availability__gte=1) & models.Q(availability__lte=9), name='mod_availability_gte_1_lte_9'),
            models.CheckConstraint(check=models.Q(cost__gte=0), name='mod_cost_gte_0')
        ]

    
class WeaponModSlot(models.Model):
    MOD_SLOTS = [
        ('Top', 'Top'),
        ('Under', 'Under'),
        ('Barrel', 'Barrel')
    ]
    weapon = models.ForeignKey('Weapons', on_delete=models.CASCADE)
    mod = models.ForeignKey('WeaponMod', on_delete=models.CASCADE)
    slot = models.CharField(max_length=12, choices=MOD_SLOTS)